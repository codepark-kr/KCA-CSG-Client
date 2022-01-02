package com.shelter.kcacsgclient;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping
public class TestController {

    @GetMapping("/api/test")
    public HashMap testApi(){
        HashMap result = new HashMap();
        result.put("message","Getting data via test-controller working well now.");
        return result;
    }
}
