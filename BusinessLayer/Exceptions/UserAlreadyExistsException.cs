using System;

namespace DemoAPI.BusinessLayer.Exceptions
{
  public class UserAlreadyExistsException: ApplicationException
  {
    public UserAlreadyExistsException() { }
    public UserAlreadyExistsException(string message): base(message) { }
  }
}