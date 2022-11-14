create database tasks_db;
use tasks_db;

create table tasks (
    id integer primary key auto_increment, 
    title varchar(100),
    description varchar(500),
    status integer default 0,
    categoryId integer,
    userId integer
);

create table user(
    id integer primary key auto_increment, 
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100)
);

create table categories (
    id integer primary key auto_increment, 
    title varchar(100)
);