using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using QuickApp.ViewModels;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<StudentController> _logger;

        public StudentController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<StudentController> logger)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        // GET: api/students
        [HttpGet]
        public IActionResult GetStudents()
        {
            var allStudents =  _unitOfWork.Students.GetAll().ToList();
            return Ok(_mapper.Map<IEnumerable<StudentViewModel>>(allStudents));
        }

        // GET: api/students/id
       [HttpGet("{id}")]
       public IActionResult GetStudent(int id)
        {
            var student = _unitOfWork.Students.Find(x => x.Id == id).FirstOrDefault();
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);

        }


        [HttpPut("users/{id}")]
        public IActionResult UpdateStudent(StudentViewModel studentViewModel, int id)
        {
            var updateStudent = _unitOfWork.Students.Find(x => x.Id == id).FirstOrDefault();
            _unitOfWork.Students.Update(updateStudent);
            _unitOfWork.SaveChanges();
            return Ok();
        } 

        [HttpPost]
        public IActionResult PostStudent([FromBody] StudentViewModel studentViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var postStudent =  _mapper.Map<Student>(studentViewModel);
                _unitOfWork.Students.Update(postStudent);

                return Ok();

            } catch (DbUpdateException ex)
            {
                _logger.LogError(ex, ex.Message);
                throw ex;
            }
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteStudent([FromBody] StudentViewModel studentViewModel)
        {
            try
            {
                var studentToDelete = _mapper.Map<Student>(studentViewModel);
                _unitOfWork.Students.Remove(studentToDelete);
                return Ok();
            }
            catch (DbUpdateException ex)
            {
                _logger.LogError(ex, ex.Message);
                throw ex;
            }
        }
    }
}
