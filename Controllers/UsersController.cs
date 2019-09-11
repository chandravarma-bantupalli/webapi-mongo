using System;
using Microsoft.AspNetCore.Mvc;
using DemoAPI.Models;
using DemoAPI.BusinessLayer;
using DemoAPI.BusinessLayer.Exceptions;

namespace DemoAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController: ControllerBase
  {        
    private readonly IUserService service;
    public UsersController(IUserService userService)
    {
      service = userService;
    }
    [HttpGet]
    public IActionResult GetAllUsers()
    {
      try
      {
        return Ok(service.getAllUsers());
      }
      catch(Exception exe)
      {
        return BadRequest(exe.Message);
      }
    }
    [HttpGet]
    [Route("{userId}")]
    public IActionResult GetUserById(string userId)
    {
      try
      {
        return Ok(service.getUserById(userId));
      }
      catch(UserNotFoundException uExe)
      {
        return NotFound(uExe.Message);
      }
      catch(Exception exe)
      {
        return BadRequest(exe.Message);
      }
    }
    [HttpPost]
    public IActionResult PostUser([FromBody] User u)
    {
      try
      {
        service.addUser(u);
        return Ok("Added User");
      }
      catch(UserAlreadyExistsException uExe)
      {
        return BadRequest(uExe.Message);
      }
      catch(Exception exe)
      {
        return BadRequest(exe.Message);
      }
    }
    [HttpPut]
    [Route("{userId}/update")]
    public IActionResult PutUser(string userId, [FromBody] User u)
    {
      try
      {
        return Ok(service.updateUser(userId, u));
      }
      catch(UserNotFoundException uExe)
      {
        return NotFound(uExe.Message);
      }
      catch(Exception exe)
      {
        return BadRequest(exe.Message);
      }
    }
    [HttpDelete]
    [Route("{userId}/delete")]
    public IActionResult DeleteUser(string userId)
    {
      try
      {
        return Ok(service.deleteUser(userId));
      }
      catch(UserNotFoundException uExe)
      {
        return NotFound(uExe.Message);
      }
      catch(Exception exe)
      {
        return BadRequest(exe.Message);
      }
    }
  }
}