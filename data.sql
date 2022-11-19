CREATE TABLE user_login_data (userID serial primary key, username VARCHAR ( 50 ), passwordHash VARCHAR ( 128 ), email VARCHAR ( 256 ) UNIQUE, created_on TIMESTAMP NOT NULL, last_login TIMESTAMP );

Insert into user_login_data(username, passwordHash, email, created_on) values ( 'First_try', '123456', 'aaa@gmail.com', CURRENT_TIMESTAMP);

-- 2022/11/15
Insert into user_login_data(username, passwordHash, email, created_on, last_login) values ( 'Ramesh', '123456', 'aaabbbcce@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
Insert into user_login_data(username, passwordHash, email, created_on, last_login) values ( 'Alex', '123456', 'aaabbbccf@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
Insert into user_login_data(username, passwordHash, email, created_on, last_login) values ( 'Jessica', '123456', 'aaabbbccg@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
Insert into user_login_data(username, passwordHash, email, created_on, last_login) values ( 'Mandy', '123456', 'aaabbbcch@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);