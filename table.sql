CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),

  PRIMARY KEY (id),
  UNIQUE (phone)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;