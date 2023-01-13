CREATE DATABASE raiting_b;
\c raiting_b;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS users(
    user_id serial primary key,
    companyname varchar(100) not null,
    inn varchar(200) not null,
    email varchar(80) not null,
    ogrn varchar(80) not null,
    kpp varchar(100)  not null, 
    country varchar(60) not null,
    password varchar(80) not null,
    repeat_password varchar(80) not null
);

