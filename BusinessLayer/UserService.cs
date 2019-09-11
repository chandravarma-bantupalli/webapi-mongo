using System;
using System.Collections.Generic;
using DemoAPI.Models;
using DemoAPI.DataAccessLayer;
using DemoAPI.BusinessLayer.Exceptions;

namespace DemoAPI.BusinessLayer
{
  public class UserService: IUserService
  {
    private readonly IUserRepository repository;
    public UserService(IUserRepository userRepository)
    {
      repository = userRepository;
    }
    public void addUser(User u)
    {
      var _u = repository.getUserById(u.userId);
      if(_u == null)
      {
        repository.addUser(u);
      }
      else
      {
        throw new UserAlreadyExistsException($"User with id {u.userId} already exists");
      }
    }
    public List<User> getAllUsers()
    {
      return repository.getAllUsers();
    } 
    public User getUserById(string userId)
    {
      var u = repository.getUserById(userId);
      if(u != null)
      {
        return u;
      }
      else
      {
        throw new UserNotFoundException($"User with id {userId} not found");
      }
    }
    public bool updateUser(string userId, User u)
    {
      var _u = repository.getUserById(userId);
      if(_u != null)
      {
        return repository.updateUserById(userId, u);
      }
      else
      {
        throw new UserNotFoundException($"User with id {userId} not found");
      }
    }
    public bool deleteUser(string userId)
    {
      var _u = repository.getUserById(userId);
      if(_u != null)
      {
        return repository.deleteUserById(userId);
      }
      else
      {
        throw new UserNotFoundException($"User with id {userId} not found");
      }
    }
  }
}