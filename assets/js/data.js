// Dân ngu
const village = {
    priority: 99,
    nameVI: 'dân làng',
    nameUS:'village',
    side: 'human',
    icon: '<i class="fa-solid fa-bed"></i>',
    successMessage: 'success',
    errorMessages: [
        {
            name: 'error',
            message: '',
        }
    ],
};
// Bảo vệ
const bodyguard = {
    priority: 15,
    nameVI: 'bảo vệ',
    nameUS:'bodyguard',
    side: 'human',
    icon: '<i class="fa-solid fa-shield"></i>',
    currentGuard: -1,
    oldGuard: -1,
    successMessage: 'đã chọn thành công',
    errorMessages: 'Không chọn một người hai đêm liên tiếp',
    target: function(key) {
        this.currentGuard = key;
        if(this.currentGuard != this.oldGuard) {
            this.oldGuard = key;
            return this.successMessage;
        }
        else {
            return this.errorMessages[0];
        }
        
    }
}

// Tiên tri
const seeker  = {
    priority: 13,
    nameVI: 'tiên tri',
    nameUS: 'seeker',
    side: 'human',
    icon: '<i class="fa-solid fa-eye"></i>',
    successMessage: 'Là sói',
    errorMessages: 'Là người',
    // playGame[ { name: khanh, rol: bodyguard} ]
    target: function(key) {
        if(playGame[key].role.side == 'wolf') return this.successMessage;
        return this.errorMessages;
    }
};

const hunter = {
    priority: 17,
    nameVI: 'thợ săn',
    nameUS: 'hunter',
    side: 'human',
    icon: '<i class="fa-solid fa-gun"></i>',
    successMessage: 'Chọn thành công',
    errorMessages: 'Lỗi',
    currentTarget: '',
    target: function(key) {
        this.currentTarget = key;
        return this.successMessage;        
    },
}


// Sói thường
const wolf = {
    priority: 10,
    nameVI: 'sói',
    nameUS: 'wolf',
    side: 'wolf',
    icon: '<i class="fa-solid fa-dog"></i>',
}

const characters = {
    rules: [ 
        village,
        bodyguard,
        seeker,
        hunter,
        wolf,
    ],

    findByNameVI: function(nameVI) {
        return this.rules.find( (rule) => {
            return rule.nameVI == nameVI;
        })
    },

    findByNameUS: function(nameUS) {
        return this.rules.find( (rule) => {
            return rule.nameUS == nameUS;
        })
    },

    isSide: function(rule) {
        return this.rules[rule].side;
    }
}

export default characters;