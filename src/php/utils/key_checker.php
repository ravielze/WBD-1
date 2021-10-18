<?php
    function KeyCheck(&$obj, $keys) {
        foreach ($keys as $key){
            if (!isset($obj[$key])) {
                return false;
            }
        }
        return true;
    }

    function IsNumeric(&$obj, $keys) {
        foreach ($keys as $key){
            if (!isset($obj[$key])) {
                return false;
            }
            if (!is_numeric($obj[$key])){
                return false;
            }
        }
        return true;
    }

    function IsLength(&$obj, $keysLength) {
        foreach ($keysLength as $key => $val){
            if (!isset($obj[$key])) {
                return false;
            }
            if (strlen($obj[$key]) < intval($val)){
                return false;
            }
        }
        return true;
    }
?>