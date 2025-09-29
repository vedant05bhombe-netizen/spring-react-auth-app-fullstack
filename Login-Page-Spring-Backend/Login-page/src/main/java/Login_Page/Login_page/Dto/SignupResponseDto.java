package Login_Page.Login_page.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupResponseDto {
    private Long id;
    private String username;
    private String password;

    public SignupResponseDto(Long id, String username) {
    }
}
