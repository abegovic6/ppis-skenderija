package ba.unsa.etf.ppis.dto;

import java.io.Serializable;

public class MessageDTO implements Serializable {
    private String message;

    public MessageDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}


