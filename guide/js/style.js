$(document).ready(function(){
    Basic.default.init();
});

var Basic = {
    // 메인
  default : {
    init : function() {
      Basic.default.basicTabIink(); //탭링크이동
      Basic.default.basicTab(); //탭컨텐츠존재
      Basic.default.fileUpload(); //파일업로드
      Basic.default.datePicker(); //데이터피커
      Basic.default.layerPopDim(); //레이어팝업
  },

    basicTabIink: function() {
      var $tablist = $(".tab_list .tab_list_item_link");
      $tablist.click(function(){
        $tablist.removeClass("on");
        $(this).addClass("on");
      });
    },

    basicTab: function() {
      var $tablist = $(".tab_list .tab_list_item");
      $tablist.click(function(){
        var tabCon =$(this).attr('data-tab');
        $tablist.removeClass("on");
        $(".tab_content").removeClass("on");
        $(this).addClass("on");
    		$("#"+tabCon).addClass("on");
      });
    },

    fileUpload: function(){
       var fileTarget = $('.filebox .upload-hidden');
       fileTarget.on('change', function(){
         if(window.FileReader){
           var filename = $(this)[0].files[0].name; } else {
           var filename = $(this).val().split('/').pop().split('\\').pop();
         }
        $(this).siblings('.upload-name').val(filename);
      });

    },
    datePicker: function(){
      $( "#datepicker" ).datepicker({
        dateFormat: 'yy-mm-dd', //Input Display Format 변경
        showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        showMonthAfterYear:true, //년도 먼저 나오고, 뒤에 월 표시
        changeYear: true ,//콤보박스에서 년 선택 가능
        changeMonth: true, //콤보박스에서 월 선택 가능
        showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        buttonImageOnly: true, //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        buttonText: "선택", //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        yearSuffix: "년", //달력의 년도 부분 뒤에 붙는 텍스트
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'], //달력의 월 부분 텍스트
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['일','월','화','수','목','금','토'],//달력의 요일 부분 텍스트
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], //달력의 요일 부분 Tooltip 텍스트
        minDate: "-1M", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        maxDate: "+1M", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후),
        buttonImage: "img/icon_calender.png",//버튼 이미지 경로
        buttonImageOnly: true,
        buttonText: "Select date"
      });

      $( "#datepicker2" ).datepicker({
        dateFormat: 'yy-mm-dd', //Input Display Format 변경
        showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        showMonthAfterYear:true, //년도 먼저 나오고, 뒤에 월 표시
        changeYear: true ,//콤보박스에서 년 선택 가능
        changeMonth: true, //콤보박스에서 월 선택 가능
        showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        buttonImageOnly: true, //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        buttonText: "선택", //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        yearSuffix: "년", //달력의 년도 부분 뒤에 붙는 텍스트
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'], //달력의 월 부분 텍스트
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['일','월','화','수','목','금','토'],//달력의 요일 부분 텍스트
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], //달력의 요일 부분 Tooltip 텍스트
        minDate: "-1M", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        maxDate: "+1M", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후),
        buttonImage: "img/icon_calender.png",//버튼 이미지 경로
        buttonImageOnly: true,
        buttonText: "Select date"
      });

    },

    layerPopDim: function(){
      $('.btn_layerpop').click(function(){
          var $href = $(this).attr('href');
          layer_popup($href);
      });
      function layer_popup(el){
          var $el = $(el);        //레이어의 id를 $el 변수에 저장
          var isDim = $el.prev().hasClass('dimbg');
          isDim ? $('.dim_layer').fadeIn() : $el.fadeIn();

          var $elWidth = ~~($el.outerWidth()),
              $elHeight = ~~($el.outerHeight()),
              docWidth = $(document).width(),
              docHeight = $(document).height();

          // 화면의 중앙에 레이어를 띄운다.
          if ($elHeight < docHeight || $elWidth < docWidth) {
              $el.css({
                  marginTop: -$elHeight /2,
                  marginLeft: -$elWidth/2
              })
          } else {
              $el.css({top: 0, left: 0});
          }

          $el.find('.btn_layer_close').click(function(){
              isDim ? $('.dim_layer').fadeOut() : $el.fadeOut();
              return false;
          });

          $('.dim_layer .dimbg').click(function(){
              $('.dim_layer').fadeOut();
              return false;
          });

      }
    }

  }
}
