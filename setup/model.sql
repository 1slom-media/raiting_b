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

CREATE TABLE IF NOT EXISTS analitika(
    id serial primary key,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    img text not null,
    data_date varchar(100) not null,
    date timestamp default current_timestamp
);