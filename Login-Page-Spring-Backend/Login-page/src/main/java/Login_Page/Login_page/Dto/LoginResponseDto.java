package Login_Page.Login_page.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data

@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

     String jwt;
     Long UserId;
}
