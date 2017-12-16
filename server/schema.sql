CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  UserID int primary key auto_increment,
  username text
);

CREATE TABLE Rooms (
  RoomID int primary key auto_increment,
  roomname text
);

CREATE TABLE Messages (
  MessageID int NOT NULL auto_increment primary key,
  Txt text NOT NULL,
  UserID int NOT NULL, 
  RoomID int NOT NULL,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (roomID) REFERENCES Rooms(RoomID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

