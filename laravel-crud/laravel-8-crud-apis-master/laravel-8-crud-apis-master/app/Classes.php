<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
        protected $fillable = [
            'code',
            'name',
            'maximum_students',
            'status',
            'description'     
        ];
    
    
        
    
   
}
