package com.motoo.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@ApiModel("UpdateAccountNameRequest")
public class UpdateAccountNameReq {

    @NotEmpty
    @ApiModelProperty(name = "계좌_id", example = "1")
    Long accountId;

    @NotEmpty
    @ApiModelProperty(name = "계좌 이름입니다.", example = "계좌 이름")
    String name;
}
