const Pool = require("pg").Pool;
const pool = new Pool({
  user: "emp_admin",
  host: "localhost",
  database: "employee",
  password: "employee",
  port: 5432,
});

const getAllEmployees = async (request, response) => {
  const emp_details = await getAllEmployeesDetails();
  const emp_dept = await getAllEmp_DeptRelations();
  const dept_details = await getDepartmentDeatils();
  let emp_deptIndex = 0, empIndex = 0;
  emp_details.forEach((emp) => (emp.department = []));
  while (emp_deptIndex < emp_dept.length) {
    while (
      emp_deptIndex < emp_dept.length &&
      emp_details[empIndex].empid == emp_dept[emp_deptIndex].emp_id
    ) {
      emp_details[empIndex].department.push(
        dept_details.find(
          (dept) => dept.dept_id == emp_dept[emp_deptIndex].dept_id
        ).name
      );
      emp_deptIndex++;
    }
    empIndex++;
  }
  response.status(200).json(emp_details);
};

const getAllEmployeesDetails = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT emp_id as empid, name, email, phone, salary FROM emp_details ORDER BY emp_id ASC",
      (error, results) => {
        if (error) {
          return reject(err);
        }
        resolve(results.rows);
      }
    );
  });
};
const getAllEmp_DeptRelations = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM emp_dept ORDER BY emp_id ASC",
      (error, results) => {
        if (error) {
          return reject(err);
        }
        resolve(results.rows);
      }
    );
  });
};
const getDepartmentDeatils = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM dept_details ORDER BY dept_id ASC",
      (error, results) => {
        if (error) {
          return reject(err);
        }
        resolve(results.rows);
      }
    );
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getAllEmployees,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
