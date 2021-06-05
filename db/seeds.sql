INSERT INTO department (department_name)
VALUES ('Ticket Office'), ('Community Relations'), ('Marketing'), ('Communication Services');

INSERT INTO employeeRole (title, salary, department_id)
VALUES ('Director of Ticket Sales', 80500.00, 1), ('Event Coordinator', 45000.00, 2), ('Intern', 12000.00, 3), ('Assistant Coordinator', 35000.00, 2), ('Associate Director',55000.00, 4);

INSERT INTO employee (first_name, last_name, employeeRole_id, manager_id)
VALUES 
('James', 'Fraser', 5, 1),
  ('Jack', 'London', 1, 1),
  ('Robert', 'Bruce', 4, 2),
  ('Peter', 'Greenaway', 4, 2),
  ('Derek', 'Jarman', 4, 1),
  ('Paolo', 'Pasolini', 3, 2),
  ('Heathcote', 'Williams', 4, 1),
  ('Sandy', 'Powell', 2, 7),
  ('Emil', 'Zola', 3, 8),
  ('Sissy', 'Coalpits', 3, 8),
  ('Antoinette', 'Capet', 3, 8),
  ('Samuel', 'Delany', 5, 1),
  ('Tony', 'Duvert', 4, 12),
  ('Dennis', 'Cooper', 4, 12);