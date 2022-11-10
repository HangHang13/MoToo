package com.motoo.api.dto.user;


import com.motoo.db.entity.School;
import com.motoo.db.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Setter @Getter
public class BaseUserInfo {
    private Long userId;

    private String email;

    private String nickname;

    // 현재 주계좌 번호
    private int current;

    //관심 주식 종목코드
    private List<String> favoriteStockCode;

    //주계좌의 시드머니
    private int seed;

    //마지막으로 퀴즈 푼 날짜
    private Date quizDay;

    private List<AccountStockInfo> stockInfo;

    private School schoolId;


    public static BaseUserInfo of(Optional<User> user) {
        BaseUserInfo userinfo = new BaseUserInfo();
        userinfo.setUserId(user.get().getUserId());
        userinfo.setEmail(user.get().getEmail());
        userinfo.setNickname(user.get().getNickname());
        userinfo.setCurrent(user.get().getCurrent());
        userinfo.setQuizDay(user.get().getQuizDay());
        userinfo.setSchoolId(user.get().getSchool());

        return userinfo;
    }
}
