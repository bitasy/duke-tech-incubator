/*
Write SQL queries that will supply dynamic contents for the web pages you designed for Task 4. Also
write SQL code that modifies the database on behalf of the user. You may hard-code the query and
update parameters. Test these SQL statements in the sample database
*/

-- List of all projects
Select *
from Project;

-- Show active only
Select *
from Project
where status = 'Active';

-- Filter by mentor and founder
Select *
from Project natural join Mentorship
where professor = 'jk123' and founder = 'jql3';


-- Info on cool projects
Select Project.name, description, Person.name
from Project, Person, Tag
where Tag.pid = Project.pid
and tag = 'cool'
and founder = Person.netid;

-- Meeting time and location for a specific project
Select time, location
from Meeting, Project
where Meeting.pid = Project.pid and Project.name = "Database Project";

