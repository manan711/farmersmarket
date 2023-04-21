-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 21/04/2023 às 07:32
-- Versão do servidor: 10.4.24-MariaDB
-- Versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `farm_marketplace`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(60) NOT NULL,
  `PhoneNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `farmer`
--

CREATE TABLE `farmer` (
  `FarmerID` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(60) NOT NULL,
  `PhoneNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `farmer`
--

INSERT INTO `farmer` (`FarmerID`, `UserId`, `Address`, `City`, `Province`, `PhoneNumber`) VALUES
(4, 12, '108 University Ave', 'Waterloo', 'ON', '(519) 885-0300');

-- --------------------------------------------------------

--
-- Estrutura para tabela `orderItem`
--

CREATE TABLE `orderItem` (
  `OrderItemId` int(11) NOT NULL,
  `OrderId` int(11) NOT NULL,
  `ItemName` varchar(69) NOT NULL,
  `ItemQuantity` int(11) NOT NULL,
  `ItemPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `orders`
--

CREATE TABLE `orders` (
  `OrderId` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `Tax` decimal(10,2) DEFAULT NULL,
  `SubTotal` decimal(10,2) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `FarmerID` int(11) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `ProductDescription` varchar(255) NOT NULL,
  `ProductPrice` decimal(10,2) DEFAULT NULL,
  `ProductQuantity` int(100) NOT NULL,
  `ProductImageURL` varchar(255) NOT NULL,
  `ProductCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`ProductID`, `FarmerID`, `ProductName`, `ProductDescription`, `ProductPrice`, `ProductQuantity`, `ProductImageURL`, `ProductCategory`) VALUES
(74, 4, 'Tomato ', 'Beefsteak Red', '1.47', 12, 'tomato.jpeg', 'Fruit'),
(75, 4, 'Potato', 'yellow potato', '1.80', 34, 'potato.jpeg', 'Vegetables'),
(76, 4, 'Carrot', 'carrot', '1.99', 111, 'Carrot.jpeg', 'Vegetables'),
(77, 4, 'Lettuce', 'Lettuce Iceberg', '2.99', 12, 'Lettuce.jpeg', 'Vegetables');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(60) NOT NULL,
  `LastName` varchar(60) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `TypeAccount` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`UserId`, `FirstName`, `LastName`, `Email`, `Password`, `TypeAccount`) VALUES
(12, 'Admin', 'Admin', 'admin@email.com', '123', 'Farmer');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `farmer`
--
ALTER TABLE `farmer`
  ADD PRIMARY KEY (`FarmerID`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `orderItem`
--
ALTER TABLE `orderItem`
  ADD PRIMARY KEY (`OrderItemId`),
  ADD KEY `FK_OrderItem_Orders` (`OrderId`);

--
-- Índices de tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `FarmerID` (`FarmerID`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `UNIQUE_EMAIL` (`Email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `farmer`
--
ALTER TABLE `farmer`
  MODIFY `FarmerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `orderItem`
--
ALTER TABLE `orderItem`
  MODIFY `OrderItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Restrições para tabelas `farmer`
--
ALTER TABLE `farmer`
  ADD CONSTRAINT `farmer_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Restrições para tabelas `orderItem`
--
ALTER TABLE `orderItem`
  ADD CONSTRAINT `FK_OrderItem_Orders` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`OrderId`);

--
-- Restrições para tabelas `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Restrições para tabelas `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`FarmerID`) REFERENCES `farmer` (`FarmerID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
