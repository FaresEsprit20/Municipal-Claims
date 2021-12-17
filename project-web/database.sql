-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 31 mai 2019 à 03:32
-- Version du serveur :  10.1.40-MariaDB
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `database`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

CREATE TABLE `administrateur` (
  `cin_admin` varchar(8) NOT NULL,
  `nom_com` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`cin_admin`, `nom_com`) VALUES
('88888888', 'Bardo'),
('66666666', 'malta'),
('12345689', 'Marsa'),
('99999999', 'Tunis');

-- --------------------------------------------------------

--
-- Structure de la table `agent`
--

CREATE TABLE `agent` (
  `cin_agent` varchar(8) NOT NULL,
  `cin_admin` varchar(8) NOT NULL,
  `nom_com` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agent`
--

INSERT INTO `agent` (`cin_agent`, `cin_admin`, `nom_com`) VALUES
('55555555', '99999999', 'Tunis'),
('77777777', '88888888', 'Bardo');

-- --------------------------------------------------------

--
-- Structure de la table `citoyen`
--

CREATE TABLE `citoyen` (
  `cin_cit` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `citoyen`
--

INSERT INTO `citoyen` (`cin_cit`) VALUES
('04627013'),
('09447081'),
('09447298'),
('11829581'),
('12345547'),
('12345678');

-- --------------------------------------------------------

--
-- Structure de la table `commune`
--

CREATE TABLE `commune` (
  `nom_com` varchar(40) NOT NULL,
  `adresse` text NOT NULL,
  `password_admin` int(11) NOT NULL,
  `nom_gouv` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commune`
--

INSERT INTO `commune` (`nom_com`, `adresse`, `password_admin`, `nom_gouv`) VALUES
('Bardo', 'ssssssss aaaaaaaaa sssssssssss', 111111, 'Tunis'),
('Mahdia', 'dddddddddddsssss', 111115, 'Mahdia'),
('malta', 'ddddddddddddddddddddd', 111113, 'Tunis'),
('Marsa', 'dddddddddddddddddddddddddddd', 111114, 'Tunis'),
('Tunis', 'tttttttttttttt', 111112, 'Tunis');

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

CREATE TABLE `compte` (
  `cin` varchar(8) NOT NULL,
  `password` varchar(15) NOT NULL,
  `mailadress` text NOT NULL,
  `nom_prenom` text NOT NULL,
  `occupation` enum('Citoyen','Administrateur','Agent','') NOT NULL,
  `telephone` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`cin`, `password`, `mailadress`, `nom_prenom`, `occupation`, `telephone`) VALUES
('04627013', '123456', 'faten@gmail.com', 'faten ben slama', 'Citoyen', '77456147'),
('09447081', 'Zakataka', 'faresbenslama95@gmail.com', 'Fares Ben Slama', 'Citoyen', NULL),
('09447298', '654321', 'hamdibensfadhl@gmail.com', 'Hamdi Ben Fadhl', 'Citoyen', NULL),
('11829581', '123456789', 'iheb45636@gmail.com', 'Iheb belhaj', 'Citoyen', NULL),
('12345547', 'galyar2019', 'galyar@gmail.com', 'Galina Yaretska', 'Citoyen', NULL),
('12345678', '12345678', 'wajdiwajdi@yah', 'Wajdi Gabsi', 'Citoyen', '77889978'),
('12345689', '111114', 'f_benslama@yahoo.fr', 'imed trabelsi', 'Administrateur', '55411247'),
('55555555', '000000', 'jamellakhmi@yahoo.fr', 'Jamel Lakmi', 'Agent', '99585780'),
('66666666', '123456777', 'alachebbi@gmail.com', 'ala chebbi', 'Administrateur', '52728343'),
('77777777', '111111', 'majidchebbi@gmail.com', 'majid chebbi', 'Agent', '44114472'),
('88888888', '000000', 'mouradchebbi@gmail.com', 'Mourad Chebbi', 'Administrateur', '55612547'),
('99999999', '123456', 'hamedzoubair@gmail.com', 'hamed zoubair', 'Administrateur', '99585784');

-- --------------------------------------------------------

--
-- Structure de la table `gouvernorat`
--

CREATE TABLE `gouvernorat` (
  `nom_gouv` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `gouvernorat`
--

INSERT INTO `gouvernorat` (`nom_gouv`) VALUES
('Ariana'),
('Ben Arous'),
('Bizerte'),
('Gabès'),
('Jendouba'),
('Kasserine'),
('Kébili'),
('Kef'),
('Mahdia'),
('Manouba'),
('Médenine'),
('Monastir'),
('Nabeul'),
('Sfax'),
('Sidi Bouzid'),
('Siliana'),
('Sousse'),
('Tataouine'),
('Tozeur'),
('Tunis'),
('Zaghouan');

-- --------------------------------------------------------

--
-- Structure de la table `reclamation`
--

CREATE TABLE `reclamation` (
  `rec_id` int(11) NOT NULL,
  `type_rec` varchar(30) NOT NULL,
  `etat_reclamation` varchar(10) NOT NULL DEFAULT 'En Cours',
  `sujet` text,
  `adresse` text,
  `postal` int(4) DEFAULT NULL,
  `datetimes` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `laptitude` text,
  `longitude` text,
  `cin_admin` varchar(8) NOT NULL,
  `nom_gouv` varchar(30) DEFAULT NULL,
  `nom_com` varchar(40) NOT NULL,
  `cin_cit` varchar(8) NOT NULL,
  `photo` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reclamation`
--

INSERT INTO `reclamation` (`rec_id`, `type_rec`, `etat_reclamation`, `sujet`, `adresse`, `postal`, `datetimes`, `laptitude`, `longitude`, `cin_admin`, `nom_gouv`, `nom_com`, `cin_cit`, `photo`) VALUES
(69, 'Eclairage public', 'En Cours', 'Gghhju hhgft hhfgjk hhgg', '', NULL, '2019-05-26 10:14:45', '36.8131123', '10.1311184', '12345689', 'Tunis', 'Marsa', '12345678', 'images/img_user19-05-26-11-14-45.jpg'),
(70, 'Voirie', 'En Cours', 'Thhftt yhh', '', NULL, '2019-05-26 10:48:56', '36.8131123', '10.1311184', '12345689', 'Tunis', 'Marsa', '12345678', 'images/img_user19-05-26-11-48-56.jpg'),
(71, 'SantÃ© et hygiÃ¨ne', 'En Cours', 'Cvhhyc yhgh yyhhf', 'Fghhhj hhhdf hhgtb hhhg', 5544, '2019-05-26 13:12:12', NULL, NULL, '12345689', 'Tunis', 'Marsa', '12345678', 'images/img_user19-05-26-02-12-12.jpg'),
(72, 'Eclairage public', 'AcceptÃ©e', 'Rgyhu byyu ggxr', '', NULL, '2019-05-26 22:26:35', '36.8131123', '10.1311184', '88888888', 'Tunis', 'Bardo', '12345678', 'images/img_user19-05-26-11-26-35.jpg'),
(73, 'ProprietÃ©', 'En Cours', '1hhuuujvhhu', '22, 22, Avenue Monji Slim, Le Bardo, Tunis, Tunisie, TN', NULL, '2019-05-27 03:39:10', '36.8131123', '10.1311184', '99999999', 'Tunis', 'Tunis', '12345678', 'images/img_user19-05-27-04-39-10.jpg'),
(74, 'Voirie', 'SupprimÃ©e', 'hghjbkb', 'ljjljlj', 4415, '2019-05-28 01:24:16', NULL, NULL, '88888888', 'Tunis', 'Bardo', '12345678', 'images/img_user19-05-26-11-14-45.jpg'),
(75, 'Voirie', 'En Cours', 'llllmljj', 'jjjjjjjj', 4401, '2019-05-28 01:31:58', NULL, NULL, '88888888', 'Tunis', 'Bardo', '09447298', 'images/img_user19-05-26-02-12-12.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `tache`
--

CREATE TABLE `tache` (
  `tache_id` int(11) NOT NULL,
  `justification` text,
  `sujet_tache` text NOT NULL,
  `etat_tache` text NOT NULL,
  `datetimes` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cin_agent` varchar(8) NOT NULL,
  `cin_admin` varchar(8) NOT NULL,
  `rec_id` int(11) NOT NULL,
  `adresse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tache`
--

INSERT INTO `tache` (`tache_id`, `justification`, `sujet_tache`, `etat_tache`, `datetimes`, `cin_agent`, `cin_admin`, `rec_id`, `adresse`) VALUES
(2, 'images/img_user19-05-27-05-22-25.jpg', '1112254', 'TerminÃ©e ', '2019-05-27 03:41:43', '55555555', '99999999', 73, 'dddddddddsasaas\r\ndsaaaaaaaaaaaad\r\ndddddddddsa\r\nsaaaaaaaaaaaaaaaaa'),
(3, 'images/img_user19-05-27-05-22-25.jpg', 'dsadasdsadas', 'TerminÃ©e ', '2019-05-27 22:47:05', '77777777', '88888888', 72, 'dsadasdasdas');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`cin_admin`),
  ADD KEY `nom_com` (`nom_com`);

--
-- Index pour la table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`cin_agent`),
  ADD KEY `agent_ibfk_2` (`cin_admin`),
  ADD KEY `agent_ibfk_3` (`nom_com`);

--
-- Index pour la table `citoyen`
--
ALTER TABLE `citoyen`
  ADD PRIMARY KEY (`cin_cit`);

--
-- Index pour la table `commune`
--
ALTER TABLE `commune`
  ADD PRIMARY KEY (`nom_com`),
  ADD KEY `nom_gouv` (`nom_gouv`),
  ADD KEY `password_admin` (`password_admin`);

--
-- Index pour la table `compte`
--
ALTER TABLE `compte`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `gouvernorat`
--
ALTER TABLE `gouvernorat`
  ADD PRIMARY KEY (`nom_gouv`);

--
-- Index pour la table `reclamation`
--
ALTER TABLE `reclamation`
  ADD PRIMARY KEY (`rec_id`),
  ADD KEY `nom_com` (`nom_com`),
  ADD KEY `nom_gouv` (`nom_gouv`),
  ADD KEY `reclamation_ibfk_1` (`cin_admin`),
  ADD KEY `reclamation_ibfk_2` (`cin_cit`);

--
-- Index pour la table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`tache_id`),
  ADD KEY `tache_ibfk_1` (`cin_admin`),
  ADD KEY `tache_ibfk_2` (`cin_agent`),
  ADD KEY `tache_ibfk_3` (`rec_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commune`
--
ALTER TABLE `commune`
  MODIFY `password_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111116;

--
-- AUTO_INCREMENT pour la table `reclamation`
--
ALTER TABLE `reclamation`
  MODIFY `rec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT pour la table `tache`
--
ALTER TABLE `tache`
  MODIFY `tache_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD CONSTRAINT `administrateur_ibfk_1` FOREIGN KEY (`nom_com`) REFERENCES `commune` (`nom_com`),
  ADD CONSTRAINT `administrateur_ibfk_2` FOREIGN KEY (`cin_admin`) REFERENCES `compte` (`cin`) ON DELETE CASCADE;

--
-- Contraintes pour la table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `agent_ibfk_1` FOREIGN KEY (`cin_agent`) REFERENCES `compte` (`cin`) ON DELETE CASCADE,
  ADD CONSTRAINT `agent_ibfk_2` FOREIGN KEY (`cin_admin`) REFERENCES `administrateur` (`cin_admin`) ON DELETE CASCADE,
  ADD CONSTRAINT `agent_ibfk_3` FOREIGN KEY (`nom_com`) REFERENCES `commune` (`nom_com`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `citoyen`
--
ALTER TABLE `citoyen`
  ADD CONSTRAINT `citoyen_ibfk_1` FOREIGN KEY (`cin_cit`) REFERENCES `compte` (`cin`) ON DELETE CASCADE;

--
-- Contraintes pour la table `commune`
--
ALTER TABLE `commune`
  ADD CONSTRAINT `commune_ibfk_1` FOREIGN KEY (`nom_gouv`) REFERENCES `gouvernorat` (`nom_gouv`);

--
-- Contraintes pour la table `reclamation`
--
ALTER TABLE `reclamation`
  ADD CONSTRAINT `reclamation_ibfk_1` FOREIGN KEY (`cin_admin`) REFERENCES `administrateur` (`cin_admin`) ON DELETE CASCADE,
  ADD CONSTRAINT `reclamation_ibfk_2` FOREIGN KEY (`cin_cit`) REFERENCES `citoyen` (`cin_cit`) ON DELETE CASCADE,
  ADD CONSTRAINT `reclamation_ibfk_3` FOREIGN KEY (`nom_com`) REFERENCES `commune` (`nom_com`),
  ADD CONSTRAINT `reclamation_ibfk_4` FOREIGN KEY (`nom_gouv`) REFERENCES `gouvernorat` (`nom_gouv`);

--
-- Contraintes pour la table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `tache_ibfk_1` FOREIGN KEY (`cin_admin`) REFERENCES `administrateur` (`cin_admin`) ON DELETE CASCADE,
  ADD CONSTRAINT `tache_ibfk_2` FOREIGN KEY (`cin_agent`) REFERENCES `agent` (`cin_agent`) ON DELETE CASCADE,
  ADD CONSTRAINT `tache_ibfk_3` FOREIGN KEY (`rec_id`) REFERENCES `reclamation` (`rec_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
