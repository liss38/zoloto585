<?php
function getProps($iblockId)
{
    $res = array();
    $filter = array('IBLOCK_ID' => $iblockId);
    $fields = CIBlockProperty::GetList(array(), $filter);
    while ($field = $fields->fetch()) {
        if (isset($_POST[$field['CODE']])) {
            $res[$field['ID']] = $_POST[$field['CODE']];
        }
    }

    return $res;
}
?>