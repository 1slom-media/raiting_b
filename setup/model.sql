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
    category_name varchar(100) not null,
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

CREATE TABLE IF NOT EXISTS uslugiy(
    id serial primary key,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    img text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS infarmatsia(
    id serial primary key,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    pdf text not null,
    size varchar(50) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS metadalogia(
    id serial primary key,
    category_name varchar(100) not null,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    pdf text not null,
    size varchar(50) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS renkingi(
    id serial primary key,
    category_name varchar(100) not null,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    pdf text not null,
    size varchar(50) not null,
    date timestamp default current_timestamp
);

ALTER TABLE renkingi
ADD COLUMN link text;

CREATE TABLE IF NOT EXISTS presscenter(
    id serial primary key,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    data_date varchar(100) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS news(
    id serial primary key,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    data_date varchar(100) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS vopros(
    id serial primary key,
    category_name varchar(100) not null,
    title_uz varchar not null,
    title_en varchar not null,
    title_ru varchar not null,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS categories(
    category_id serial primary key,
    title_uz varchar(250) not null,
    title_en varchar(250) not null,
    title_ru varchar(250) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS banks(
    bank_id serial primary key,
    category_id int references categories(category_id) not null,
    companyname varchar(100) not null,
    inn varchar(200) not null,
    ogrn varchar(80) not null,
    kpp varchar(100)  not null, 
    country varchar(60) not null,
    raiting varchar(100) not null,
    prognoz varchar (300) not null,
    update_date varchar(100) not null,
    date timestamp default current_timestamp
);

ALTER TABLE banks
ADD COLUMN images text;


