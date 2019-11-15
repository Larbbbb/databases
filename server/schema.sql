-- DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int not null auto_increment,
  username text,
  primary key(id)
);


-- CREATE TABLE rooms (
--   id int not null auto_increment,
--   roomname text,
--   primary key(id)
-- );


CREATE TABLE friends (

  user1 int,
  user2 int,
  foreign key(user1) references users(id),
  foreign key(user2) references users(id)
);

CREATE TABLE messages (
  id int not null auto_increment,
  message_text text,
  roomname text,
  usernameID int,
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  primary key(id),
  foreign key(usernameID) references users(id)
  -- foreign key(roomnameID) references rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

