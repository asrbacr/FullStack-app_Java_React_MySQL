package ru.ksergey.ContactsApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.ksergey.ContactsApp.entity.Contact;

public interface ContactRepository 
extends JpaRepository<Contact, Long>{
    
}
