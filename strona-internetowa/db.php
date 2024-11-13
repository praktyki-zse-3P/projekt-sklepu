<?php
/**
 * Export to PHP Array plugin for PHPMyAdmin
 * @version 5.2.1
 */

/**
 * Database `projekt sklepu`
 */

/* `projekt sklepu`.`kategoria` */
$kategoria = array(
  array('id_kategorii' => '1','plec' => 'meskie'),
  array('id_kategorii' => '2','plec' => 'damskie'),
  array('id_kategorii' => '3','plec' => 'unisex')
);

/* `projekt sklepu`.`klient` */
$klient = array(
  array('id_klienta' => '1','imie' => 'Dominik','nazwisko' => 'Subiel','telefon' => '534290463','miejscowosc' => 'Gdańsk','ulica' => 'Lwowska','nr_mieszkania' => '1','kod_pocztowy' => '80-415'),
  array('id_klienta' => '5','imie' => 'Dominik','nazwisko' => 'Dubiel','telefon' => '529563810','miejscowosc' => 'gdynia','ulica' => 'słoneczna','nr_mieszkania' => '5','kod_pocztowy' => '80-470'),
  array('id_klienta' => '6','imie' => 'Dominik','nazwisko' => 'Dubiel','telefon' => '534290463','miejscowosc' => 'Gdańsk','ulica' => 'Lwowska','nr_mieszkania' => '1','kod_pocztowy' => '80-415')
);

/* `projekt sklepu`.`logowanie` */
$logowanie = array(
  array('id_logowania' => '1','id_klienta' => '0','email' => 'dominik.subiel@gmail.com','hashed_password' => '$2y$10$wxiDDDzNLbXjXzoQX6TqgOHRe4L15EH9WPsGoOxZtfubLs.LO.Iv.','role' => 'user'),
  array('id_logowania' => '2','id_klienta' => '5','email' => 'dominekk3@gmail.com','hashed_password' => '$2y$10$KKJZW.yPFLlq0.xS/s1uJuRmmf6LMsOMNUYv52Yynq7C5d5jOlR8.','role' => 'admin'),
  array('id_logowania' => '3','id_klienta' => '6','email' => 'dominik.subiel@gmail.com','hashed_password' => '$2y$10$KfQT73uEvpN.eBXY0PZ2R.j84maUZnV5/JoGQtWP8QbgUrC/4FZ.a','role' => 'user')
);

/* `projekt sklepu`.`produkt` */
$produkt = array(
  array('id_produktu' => '1','model_produktu' => 'Air Max','marka_produktu' => 'Nike','cena_produktu' => '399.99','rozmiar_produktu' => '42.5','id_kategorii' => '1'),
  array('id_produktu' => '2','model_produktu' => 'Classic Leather','marka_produktu' => 'Reebok','cena_produktu' => '299.99','rozmiar_produktu' => '44','id_kategorii' => '1'),
  array('id_produktu' => '3','model_produktu' => 'Ultraboost','marka_produktu' => 'Adidas','cena_produktu' => '499.99','rozmiar_produktu' => '43','id_kategorii' => '1'),
  array('id_produktu' => '4','model_produktu' => 'Gel-Nimbus','marka_produktu' => 'Asics','cena_produktu' => '549.99','rozmiar_produktu' => '38','id_kategorii' => '2'),
  array('id_produktu' => '5','model_produktu' => 'Free Run','marka_produktu' => 'Nike','cena_produktu' => '329.99','rozmiar_produktu' => '39','id_kategorii' => '2'),
  array('id_produktu' => '6','model_produktu' => 'Superstar','marka_produktu' => 'Adidas','cena_produktu' => '379.99','rozmiar_produktu' => '37.5','id_kategorii' => '2'),
  array('id_produktu' => '7','model_produktu' => 'Chuck Taylor','marka_produktu' => 'Converse','cena_produktu' => '279.99','rozmiar_produktu' => '41','id_kategorii' => '3'),
  array('id_produktu' => '8','model_produktu' => 'Old Skool','marka_produktu' => 'Vans','cena_produktu' => '259.99','rozmiar_produktu' => '42','id_kategorii' => '3'),
  array('id_produktu' => '9','model_produktu' => 'Classic Slip-On','marka_produktu' => 'Vans','cena_produktu' => '239.99','rozmiar_produktu' => '40','id_kategorii' => '3'),
  array('id_produktu' => '10','model_produktu' => 'Wave Rider','marka_produktu' => 'Mizuno','cena_produktu' => '379.99','rozmiar_produktu' => '43','id_kategorii' => '1'),
  array('id_produktu' => '11','model_produktu' => 'Gel-Kayano','marka_produktu' => 'Asics','cena_produktu' => '599.99','rozmiar_produktu' => '44','id_kategorii' => '1'),
  array('id_produktu' => '12','model_produktu' => 'Pegasus','marka_produktu' => 'Nike','cena_produktu' => '429.99','rozmiar_produktu' => '42','id_kategorii' => '1'),
  array('id_produktu' => '13','model_produktu' => 'Cali','marka_produktu' => 'Puma','cena_produktu' => '319.99','rozmiar_produktu' => '44.5','id_kategorii' => '1'),
  array('id_produktu' => '14','model_produktu' => 'RS-X','marka_produktu' => 'Puma','cena_produktu' => '399.99','rozmiar_produktu' => '45','id_kategorii' => '1'),
  array('id_produktu' => '15','model_produktu' => 'Nite Jogger','marka_produktu' => 'Adidas','cena_produktu' => '499.99','rozmiar_produktu' => '43.5','id_kategorii' => '1'),
  array('id_produktu' => '16','model_produktu' => 'Air Zoom','marka_produktu' => 'Nike','cena_produktu' => '359.99','rozmiar_produktu' => '38.5','id_kategorii' => '2'),
  array('id_produktu' => '17','model_produktu' => 'Classic Nylon','marka_produktu' => 'Reebok','cena_produktu' => '299.99','rozmiar_produktu' => '37','id_kategorii' => '2'),
  array('id_produktu' => '18','model_produktu' => 'Court Vision','marka_produktu' => 'Nike','cena_produktu' => '279.99','rozmiar_produktu' => '39.5','id_kategorii' => '2'),
  array('id_produktu' => '19','model_produktu' => 'RS-X3','marka_produktu' => 'Puma','cena_produktu' => '379.99','rozmiar_produktu' => '40','id_kategorii' => '2'),
  array('id_produktu' => '20','model_produktu' => 'Grid 9000','marka_produktu' => 'Saucony','cena_produktu' => '339.99','rozmiar_produktu' => '38','id_kategorii' => '2'),
  array('id_produktu' => '21','model_produktu' => 'Pureboost','marka_produktu' => 'Adidas','cena_produktu' => '449.99','rozmiar_produktu' => '39','id_kategorii' => '2'),
  array('id_produktu' => '22','model_produktu' => 'Sk8-Hi','marka_produktu' => 'Vans','cena_produktu' => '299.99','rozmiar_produktu' => '40.5','id_kategorii' => '3'),
  array('id_produktu' => '23','model_produktu' => 'Continental 80','marka_produktu' => 'Adidas','cena_produktu' => '349.99','rozmiar_produktu' => '42','id_kategorii' => '3'),
  array('id_produktu' => '24','model_produktu' => 'Era','marka_produktu' => 'Vans','cena_produktu' => '259.99','rozmiar_produktu' => '41','id_kategorii' => '3'),
  array('id_produktu' => '25','model_produktu' => 'One Star','marka_produktu' => 'Converse','cena_produktu' => '289.99','rozmiar_produktu' => '43','id_kategorii' => '3'),
  array('id_produktu' => '26','model_produktu' => 'Club C 85','marka_produktu' => 'Reebok','cena_produktu' => '299.99','rozmiar_produktu' => '42','id_kategorii' => '3'),
  array('id_produktu' => '27','model_produktu' => 'Stan Smith','marka_produktu' => 'Adidas','cena_produktu' => '319.99','rozmiar_produktu' => '41.5','id_kategorii' => '3')
);

/* `projekt sklepu`.`wysylka` */
$wysylka = array(
);

/* `projekt sklepu`.`zamowienia` */
$zamowienia = array(
);
