package ru.ksergey.ContactsApp.config;

import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import ru.ksergey.ContactsApp.entity.Contact;
import ru.ksergey.ContactsApp.env.SettingsApp;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@Configuration
public class CorsConfig implements RepositoryRestConfigurer {
    
    @Override
    public void configureRepositoryRestConfiguration(
        RepositoryRestConfiguration config,
        CorsRegistry cors) {
            config.exposeIdsFor(Contact.class);
            cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(SettingsApp.getHost())
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowCredentials(true);
    }
}
