<?php 

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $sqlDonationDetails = "SELECT * FROM Lovefood.DONATION WHERE DONATION_ID like ?";
    $statesmentDonationDetails = $Util->getPDO()->prepare($sqlDonationDetails);

    $statesmentDonationDetails->bindValue(1,'%'.@$_POST["DONATION_ID"].'%');
    $statesmentDonationDetails->execute();
    
    $dataDD = $statesmentDonationDetails->fetchAll(PDO::FETCH_ASSOC);
    print json_encode($dataDD);

?>