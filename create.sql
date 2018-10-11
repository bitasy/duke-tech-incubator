create table Person(
	netid varchar(8) not null primary key,
	name varchar(256) not null,
	email varchar(256) not null unique
);

create table Student(
	netid varchar(8) not null primary key,
	foreign key (netid) references Person(netid),
	grad_year year
);

create table Degree(
	student varchar(8) not null,
	foreign key (student) references Student(netid),
	type varchar(20) not null,
	check(type = 'major' or type = 'minor' or type = 'certificate'),
	name varchar(128),
	primary key(student, name)
);

create table Professor(
	netid varchar(8) not null primary key,
	foreign key (netid) references Person(netid)
);

create table Specialization(
	professor varchar(8) not null,
	foreign key (professor) references Professor(netid),
	subject varchar(256) not null
);

create table Project(
	pid int not null primary key auto_increment,
	founder varchar(8) not null,
	foreign key (founder) references Student(netid),
	name varchar(256) not null,
	status varchar(20) not null,
	check(status = 'active' or status = 'inactive'),
	description varchar(3000)
);

create table Tag(
	pid int not null,
	foreign key (pid) references Project(pid),
	tag varchar(128) not null,
	primary key(pid, tag)
);

create table Mentorship(
	pid int not null primary key,
	foreign key (pid) references Project(pid),
	professor varchar(8) not null,
	foreign key (professor) references Professor(netid)
);

create table Meeting(
	pid int not null ,
	date date not null,
	primary key(pid, date),
	time time,
	location varchar(256)
);

create table Project_Order(
	pid int not null,
	foreign key (pid) references Project(pid),
	oid int not null,
	primary key(pid, oid),
	date date,
	total decimal(6,2)
);

create table Order_Item(
	pid int not null,
	oid int not null,
	foreign key (pid, oid) references Project_Order(pid, oid),
	product_id varchar(256) not null,
	primary key(pid, oid, product_id),
	product_name varchar(256),
	quantity int,
	check (quantity >= 0),
	price decimal(5,2)
);
