CREATE DATABASE raiting_b;
\c raiting_b;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS users(
    user_id serial primary key,
    companyname varchar(100) not null,
    inn varchar(200) not null,
    email varchar(80) not null,
    ogrn varchar(80) not null,
    kpp varchar(100) not null,
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

ALTER TABLE analitika
ADD COLUMN analitka_pdf text;

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
    data_date varchar(100),
    inn varchar(200),
    ogrn varchar(80),
    kpp varchar(100),
    country varchar(60),
    date timestamp default current_timestamp
);

ALTER TABLE renkingi 
DROP COLUMN pdf;
ALTER TABLE renkingi 
DROP COLUMN size;
ALTER TABLE renkingi 
DROP COLUMN link;

ALTER TABLE renkingi
ADD COLUMN category_name_en varchar(200);
ALTER TABLE renkingi
ADD COLUMN category_name_ru varchar(200);
ALTER TABLE renkingi
ADD COLUMN ogrn varchar(80);
ALTER TABLE renkingi
ADD COLUMN kpp varchar(100);
ALTER TABLE renkingi
ADD COLUMN country varchar(60);


ALTER TABLE renkingi
ADD COLUMN link text;
ALTER TABLE renkingi
ADD COLUMN data_date varchar(100);

CREATE TABLE IF NOT EXISTS about_renking(
    id serial primary key,
    renking_id int references renkingi(id) not null,
    raiting varchar(100) not null,
    kvartal varchar (300) not null,
    atribut varchar(100) not null,
    god varchar(100) not null,
    sum varchar(100) not null,
    ranges int,
    date timestamp default current_timestamp
);

ALTER TABLE about_renking
ADD COLUMN atribut_en varchar(100);
ALTER TABLE about_renking
ADD COLUMN atribut_ru varchar(100);


CREATE TABLE IF NOT EXISTS presscenter(
    id serial primary key,
    description_uz text not null,
    description_en text not null,
    description_ru text not null,
    data_date varchar(100) not null,
    date timestamp default current_timestamp
);

ALTER TABLE
    presscenter
ADD
    COLUMN title_uz varchar(300);
ALTER TABLE
    presscenter
ADD
    COLUMN title_en varchar(300);
ALTER TABLE
    presscenter
ADD
    COLUMN title_ru varchar(300);
ALTER TABLE
    presscenter
ADD
    COLUMN press_center_pdf text;

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
    kpp varchar(100) not null,
    country varchar(60) not null,
    date timestamp default current_timestamp
);

ALTER TABLE banks
ADD COLUMN country_uz varchar;

ALTER TABLE banks
ADD COLUMN country_en varchar;

ALTER TABLE banks
DROP COLUMN raiting;
ALTER TABLE banks
DROP COLUMN prognoz;
ALTER TABLE banks
DROP COLUMN update_date;

ALTER TABLE banks
DROP COLUMN images;

ALTER TABLE
    banks
ADD
    COLUMN created_at TIMESTAMP DEFAULT NOW();

ALTER TABLE
    banks
ADD
    COLUMN updated_at TIMESTAMP DEFAULT NOW();


CREATE TABLE IF NOT EXISTS raiting(
    id serial primary key,
    bank_id int references banks(bank_id) not null,
    raiting varchar(100) not null,
    prognoz varchar (300) not null,
    update_date varchar(100) not null,
    date timestamp default current_timestamp
);

ALTER TABLE
    raiting
ADD
    COLUMN created_at TIMESTAMP DEFAULT NOW();

ALTER TABLE
    raiting
ADD
    COLUMN updated_at TIMESTAMP DEFAULT NOW();

ALTER TABLE raiting
ADD COLUMN type_reting varchar;
ALTER TABLE raiting
ADD COLUMN type_reting_uz varchar;
ALTER TABLE raiting
ADD COLUMN type_reting_en varchar;
ALTER TABLE raiting
ADD COLUMN update_date_pdf varchar;
ALTER TABLE raiting
ADD COLUMN prognoz_uz varchar;
ALTER TABLE raiting
ADD COLUMN prognoz_en varchar;

ALTER TABLE raiting
ADD COLUMN link text;



CREATE TABLE IF NOT EXISTS forma(
    id serial primary key,
    name varchar(200) not null,
    name_organisation varchar (300) not null,
    phone_number  varchar(20) not null,
    email varchar(100) not null,
    comment text not null,
    date timestamp default current_timestamp 
);

-- Drop the category_updated_trigger
DROP TRIGGER IF EXISTS banks_updated_trigger ON banks;

-- Drop the product_updated_trigger
DROP TRIGGER IF EXISTS raiting_updated_trigger ON raiting;

-- Drop the update_category_updated_at function
DROP FUNCTION IF EXISTS update_banks_updated_at();

-- Drop the update_product_updated_at function
DROP FUNCTION IF EXISTS update_raiting_updated_at();




CREATE OR REPLACE FUNCTION update_banks_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER banks_updated_trigger
BEFORE UPDATE ON banks
FOR EACH ROW
EXECUTE FUNCTION update_banks_updated_at();


CREATE OR REPLACE FUNCTION update_raiting_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER raiting_updated_trigger
BEFORE UPDATE ON raiting
FOR EACH ROW
EXECUTE FUNCTION update_raiting_updated_at();