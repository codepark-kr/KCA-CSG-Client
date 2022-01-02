package com.shelter.kcacsgclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class KcaCsgClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(KcaCsgClientApplication.class, args);
    }

}
