<?php
class UtilClass
{

    //取得欲放置的檔案路徑
    function getFilePath()
    {
        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        return $ServerRoot . "/PHP/Upload/";
    }

    //取得PDO物件
    function getPDO()
    {

        $db_host = "localhost";
        $db_user = "tibamefe_ted101";
        $db_pass = "qweasdzxc123";
        $db_select = "tibamefe_ted101g1";


        //建立資料庫連線物件
        $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
    }
}
