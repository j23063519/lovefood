<?php 
    include("../EC_group/Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL: 因為老師把前後台會員寫在一起，因此要where type=0(實務上不建議前後端寫一起)
    $sql = "SELECT * FROM LoveFood.MEMBER WHERE MEMBER_ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    //MEMBER_ID,ACCOUNT,NAME,PHONE,MEMBER_STATUS
    //給值
    $statement->bindValue(1,$_GET['id']);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);

?>