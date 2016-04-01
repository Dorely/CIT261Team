<?PHP

$scopeSpec = $_GET["scope"];

$vx6 = array('1/8"', .125);
$vx3i = array('1"', 1);
$vxr = array('1/2"', .5);
$vx2 = array('1/4"', .25);

switch ($scopeSpec) {
    case "vx-6":
        echo json_encode($vx6);
        break;
    case "vx-3i":
        echo json_encode($vx3i);
        break;
    case "vx-r":
        echo json_encode($vxr);
        break;
    case "vx-2":
        echo json_encode($vx2);
        break;
    default:
        echo "0";
}

?>