<?php

namespace RS\FormField;

use SilverStripe\Forms\TextareaField;

class CodeMirrorField extends TextareaField {
    protected $selections = null;
    protected $selections_field = null;

    protected $inputType = 'textarea';

    public function setSelections( $value, $selections_field ) {
        $this->selections       = $value;
        $this->selections_field = $selections_field;
    }

    public function getSelections() {
        return htmlspecialchars(json_encode($this->selections));
    }

    public function getSelectionsField() {
        return sprintf("Form_EditForm_%s", str_replace('Form_EditForm_','',$this->selections_field));
    }

    public function getAttributes()
    {
        $attributes = [
            'class' => trim(implode(" ", [$this->inputType,'codemirrorfield-host'])),
            'type'  => $this->inputType
        ];
        
        return array_merge(
            parent::getAttributes(),
            $attributes
        );
    }
}
