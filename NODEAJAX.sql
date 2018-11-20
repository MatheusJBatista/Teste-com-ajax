DROP DATABASE IF EXISTS NODEAJAX;

CREATE DATABASE NODEAJAX;

USE NODEAJAX;

create table tabela
(
id bigint not null auto_increment primary key,
nome varchar(5000)
);