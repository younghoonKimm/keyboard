interface keyboardType {
  [key: string]: string[];
}

export const korLayout: keyboardType = {
  default: [
    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "{tab} ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ [ ] \\",
    "{lock} ㅁ ㄴ ㅇ ㄹ ㅎ ㅎ ㅗ ㅓ ㅏ ㅣ ; ' {enter}",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ , . / {shift}",
    "한/영 {space}",
  ],

  shift: [
    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
    "{tab} ㅃ ㅉ ㄸ ㄲ T Y U I O P { } |",
    '{lock} ㅁ ㄴ ㅇ ㄹ ㅎ ㅎ ㅗ ㅓ ㅏ ㅣ ; " {enter}',
    "{shift} Z X C V B N M < > ? {shift}",
    "한/영 {space}",
  ],
};

export const EngLayout: keyboardType = {
  default: [
    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "{tab} ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ [ ] \\",
    "{lock} ㅁ ㄴ ㅇ ㄹ ㅎ ㅎ ㅗ ㅓ ㅏ ㅣ ; '{enter}",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ , . / {shift}",
    "한/영 {space}",
  ],

  shift: [
    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
    "{tab} ㅃ ㅉ ㄸ ㄲ T Y U I O P { } |",
    '{lock} ㅁ ㄴ ㅇ ㄹ ㅎ ㅎ ㅗ ㅓ ㅏ ㅣ ; "{enter}',
    "{shift} Z X C V B N M < > ? {shift}",
    "한/영 {space}",
  ],
};
