INSERT INTO Person(netid, name, email) VALUES
  ('jql3', 'Jeffrey Li', 'jeffrey.q.li@duke.edu'),
  ('sf197', 'Sherry Feng', 'sf197@duke.edu'),
  ('ban20', 'Brian Nieves', 'ban20@duke.edu'),
  ('emc44', 'Elizabeth Chiu', 'emc44@duke.edu'),
  ('junyang', 'Jun Yang', 'junyang@duke.edu'),
  ('gtm7', 'Griffin Malm', 'griffin.malm@duke.edu'),
  ('UNC1', 'Mohamed Salad', 'Msalad@uncc.edu'),
  ('xl253', 'Mike Liu', 'xinchen.liu@duke.edu'),
  ('UNC2', 'Sahithi Meduri', 'vesahithi@gmail.com'),
  ('mw376', 'Michael Williams', 'michael.williams3@duke.edu'),
  ('munagala', 'Kamesh Munagala', 'munagala@duke.edu'),
  ('vc15', 'Vincent Conitzer', 'vc15@duke.edu'),
  ('amink', 'Alexander Hartemink', 'amink@duke.edu'),
  ('ola', 'Owen Astrachan', 'ola@duke.edu'),
  ('mp275', 'Miroslav Pajic', 'mp275@duke.edu'),
  ('bcl15', 'Benjamin Lee', 'bcl15@duke.edu'),
  ('alvy', 'Alvin Lebeck', 'alvy@duke.edu');

INSERT INTO Student(netid, grad_year) VALUES
  ('gtm7', 2021),
  ('UNC1', 2020),
  ('xl253', 2022),
  ('UNC2', 2020),
  ('mw376', 2021),
  ('jql3', 2020),
  ('sf197', 2020),
  ('ban20', 2020),
  ('emc44', 2019);

INSERT INTO Professor(netid) VALUES
  ('junyang'),
  ('munagala'),
  ('vc15'),
  ('amink'),
  ('ola'),
  ('mp275'),
  ('bcl15'),
  ('alvy');

INSERT INTO Project(pid, founder, name, status, description) VALUES
  (1, 'ban20', 'Fake News Detector', 'inactive', 'Detects fake news!'),
  (2, 'ban20', 'Database Project', 'active', 'Our 316 project'),
  (3, 'jql3', 'Talk like a Kiwi', 'active', 'Learn to speak like a kiwi'),
  (4, 'gtm7', 'Sprout', 'active', 'Using CapitalOne API to build program that will educate/advise lower income people on how to use leftover capital to invest in low risk bonds'),
  (5, 'UNC2', 'PlogIt', 'active', ' an app on Fitbit that tracks the amount of trash you have picked up during your exercise.'),
  (6, 'xl253', 'Wild Chicken University', 'active', 'A self-study platform with search engine to find the same course across universities and textbooks required by different courses.'),
  (7, 'UNC1', 'Lemma', 'active', 'A mobile app that allows professors and students the ability to record lectures and rewatch later with the added feature to translate audio to text so students can have notes handy');

INSERT INTO Mentorship(pid, professor) VALUES
  (3, 'junyang');

INSERT INTO Meeting(pid, date, time, location) VALUES
  (1, '2018-05-17', '17:00', 'Perkins 123'),
  (2, '2018-03-04', '19:00', 'Edge Project Room 1');


INSERT INTO Project_Order(pid, oid, date, total) VALUES
  (1, 1, '2018-01-21', 30),
  (2, 1, '2018-07-11', 10),
  (2, 2, '2018-07-13', 2400);

INSERT INTO Order_Item(pid, oid, product_id, product_name, quantity, price)  VALUES
  (1, 1, 'agdwrgterwtgf', 'Robotic parts', 2, 15),
  (2, 1, 'agdasdfasdtgf', 'Chair', 1, 70),
  (2, 2, 'kjfdsga', 'iPhone', 3, 800);

INSERT INTO Tag(pid, tag) VALUES
  (1, 'fun'),
  (2, 'cool'),
  (2, 'fun'),
  (1, 'cool'),
  (4, 'capital'),
  (4, 'capitalone'),
  (4, 'invest'),
  (4, 'bonds'),
  (5, 'trash'),
  (5, 'exercise'),
  (5, 'environment'),
  (5, 'litter'),
  (6, 'university'),
  (6, 'textbook'),
  (6, 'price'),
  (6, 'education'),
  (6, 'search'),
  (7, 'lectures'),
  (7, 'education'),
  (7, 'students'),
  (7, 'mobile');

INSERT INTO Degree(student, type, name) VALUES
  ('jql3', 'major', 'computer science'),
  ('jql3', 'major', 'economics'),
  ('ban20', 'major', 'computer science'),
  ('sf197', 'major', 'computer science'),
  ('emc44', 'major', 'computer science'),
  ('UNC1', 'major', 'computer science'),
  ('UNC2', 'major', 'computer science'),
  ('gtm7', 'major', 'computer science'),
  ('xl253', 'major', 'computer science'),
  ('emc44', 'minor', 'biology');


INSERT INTO Specialization(professor, subject) VALUES
  ('junyang', 'computer science'),
  ('munagala', 'theoretical computer science'),
  ('vc15', 'computer science'),
  ('vc15', 'economics'),
  ('vc15', 'philosophy'),
  ('amink', 'computer science'),
  ('amink', 'philosophy'),
  ('ola', 'computer science'),
  ('mp275', 'computer science'),
  ('mp275', 'electrical and computer engineering'),
  ('bcl15', 'computer science'),
  ('bcl15', 'electrical and computer engineering'),
  ('alvy', 'computer science'),
  ('alvy', 'electrical and computer engineering');

INSERT INTO Member(netid, pid) VALUES
  ('jql3', 1),
  ('sf197', 1),
  ('emc44', 2),
  ('ban20', 2),
  ('emc44', 3),
  ('ban20', 3),
  ('jql3', 3),
  ('UNC1', 7),
  ('UNC2', 5),
  ('xl253', 6),
  ('gtm7', 4);