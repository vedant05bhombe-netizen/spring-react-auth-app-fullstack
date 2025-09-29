package Login_Page.Login_page.Dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LoginRequestDto {

    private String username;
    private String password;
}
