 -- FAKE DATA

INSERT INTO Person(netid, name, email) VALUES
  ('jql3', 'Jeffrey Li', 'jeffrey.q.li@duke.edu'),
  ('sf197', 'Sherry Feng', 'sf197@duke.edu'),
  ('ban20', 'Brian Nieves', 'ban20@duke.edu'),
  ('emc44', 'Elizabeth Chiu', 'emc44@duke.edu'),
  ('jk123', 'Jun Kang', 'jk123@duke.edu'),
  ('op69', 'Other Professor', 'other@duke.edu');

INSERT INTO Student(netid, grad_year) VALUES
  ('jql3', 2020),
  ('sf197', 2020),
  ('ban20', 2020),
  ('emc44', 2019);

INSERT INTO Professor(netid) VALUES
  ('jk123'),
  ('op69');

INSERT INTO Project(pid, founder, name, status, description) VALUES
  (1, 'ban20', 'Fake News Detector', 'inactive', 'Detects fake news!'),
  (2, 'ban20', 'Database Project', 'active', 'Our 316 project'),
  (3, 'jql3', 'Talk like a Kiwi', 'active', 'Learn to speak like a kiwi');

INSERT INTO Mentorship(pid, professor) VALUES
  (1, 'op69'),
  (2, 'op69'),
  (3, 'jk123');

INSERT INTO Meeting(pid, date, time, location) VALUES
  (1, '2018-05-17', '17:00', 'Perkins 123'),
  (2, '2018-03-04', '19:00', 'Edge Project Room 1');


INSERT INTO Project_Order(pid, oid, date, total) VALUES
  (1, 1, '2018-01-21', 30),
  (2, 1, '2018-07-11', 10),
  (2, 2, '2018-07-11', 2400);

INSERT INTO Order_Item(pid, oid, product_id, product_name, quantity, price)  VALUES
  (1, 1, 'agdwrgterwtgf', 'Robotic parts', 2, 15),
  (2, 1, 'agdasdfasdtgf', 'Chair', 1, 70),
  (2, 2, 'kjfdsga', 'iPhone', 3, 800);

INSERT INTO Tag(pid, tag) VALUES
  (1, 'fun'),
  (2, 'cool'),
  (2, 'fun'),
  (1, 'cool');

INSERT INTO Degree(student, type, name) VALUES
  ('jql3', 'major', 'computer science'),
  ('jql3', 'major', 'economics'),
  ('ban20', 'major', 'computer science'),
  ('sf197', 'major', 'computer science'),
  ('emc44', 'major', 'computer science'),
  ('emc44', 'minor', 'biology');


INSERT INTO Specialization(professor, subject) VALUES
  ('op69', 'economics'),
  ('jk123', 'computer science');

