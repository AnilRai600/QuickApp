﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
   public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string  Address { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public DateTime EnrolledDate { get; set; }


    }
}
