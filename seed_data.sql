\c messagely;

/* Insert data into users table */
INSERT INTO users (username, password, first_name, last_name, phone, join_at)
VALUES ('testuser', 'password', 'Test', 'User', '555-555-5555', current_timestamp);

INSERT INTO users (username, password, first_name, last_name, phone, join_at)
VALUES ('testuser2', 'password', 'Test2', 'User2', '444-444-4444', current_timestamp);

/* Insert data into messages table */
INSERT INTO messages (from_username, to_username, body, sent_at)
VALUES ('testuser', 'testuser2', 'Hello', current_timestamp);

INSERT INTO messages (from_username, to_username, body, sent_at)
VALUES ('testuser2', 'testuser', 'Hi', current_timestamp);

INSERT INTO messages (from_username, to_username, body, sent_at)
VALUES ('testuser', 'testuser2', 'How are you?', current_timestamp);

INSERT INTO messages (from_username, to_username, body, sent_at)
VALUES ('testuser2', 'testuser', 'I am good, how are you?', current_timestamp);