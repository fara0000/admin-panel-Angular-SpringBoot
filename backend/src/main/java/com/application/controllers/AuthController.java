package com.application.controllers;


import com.application.entities.LoginResponse;
import com.application.entities.User;
import com.application.repositories.UserRepository;
import com.application.services.UserService;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@Slf4j
@RestController
public class AuthController {
    private final UserService userService;

    private final UserRepository userRepository;

    public AuthController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    @RequestMapping(value = "lab4/register", method = {RequestMethod.OPTIONS, RequestMethod.POST})
    public ResponseEntity<String> register(@RequestBody @Valid User user, BindingResult result) {
        try {
            log.debug("POST request to register user {}", user);
            if (result.hasErrors()) {
                log.error("Validation Error");
                return new ResponseEntity<>("Validation Error", HttpStatus.BAD_REQUEST);
            }
            boolean isSaved = userService.saveUser(user);
            return isSaved ? new ResponseEntity<>("User registered successfully!", HttpStatus.OK) :
                    new ResponseEntity<>("User has already registered!", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Unexpected Error {}", e.getMessage());
            return new ResponseEntity<>("Unexpected Error", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "lab4/login", method = {RequestMethod.OPTIONS, RequestMethod.POST})
    public ResponseEntity<String> login(@RequestBody @Valid User user, BindingResult bindingResult) {
        try {
            log.debug("POST request to login user {}", user);
            if (bindingResult.hasErrors()) {
                log.error("Validation error");
                return new ResponseEntity<>("Ошибка валидации", HttpStatus.BAD_REQUEST);
            }
            Gson gson = new Gson();
            Long userId = userRepository.findByUsername(user.getUsername()).getId();
            LoginResponse loginResponse = new LoginResponse(userService.getUserToken(user), userId);
            return new ResponseEntity<>(gson.toJson(loginResponse), HttpStatus.OK);
        } catch (BadCredentialsException e) {
            log.error("Invalid user credentials {}", e.getMessage());
            return new ResponseEntity<>("Неверные учетные данные пользователя", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Unexpected error {}", e.getMessage());
            return new ResponseEntity<>("Неверные учетные данные пользователя", HttpStatus.BAD_REQUEST);
        }
    }
}