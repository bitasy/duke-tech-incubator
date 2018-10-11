/*
Write SQL queries that will supply dynamic contents for the web pages you designed for Task 4. Also
write SQL code that modifies the database on behalf of the user. You may hard-code the query and
update parameters. Test these SQL statements in the sample database
*/

-- List of all projects
Select *
from Project

-- Show active only
Select *
from Project
where status = 'Active'

-- Filter by mentor and founder
Select *
from Project
where mentor = 'Jun Yang' and founder = 'Sherry Feng'


-- Info on social justice projects
Select name, description, founder
from Project
where tag = 'Social Justice'

-- Meeting time and location for a specific project
Select time, location
from Meeting, Project
where Meeting.pid = Project.pid and Project.name = "Specific Project Name"

