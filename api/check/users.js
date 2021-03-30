const { SvUser } = $re('/models/UserModel.js');
const { SURVER_ACCOUNT } = $re('/config/secure.js');
const { apis } = $re('/config/urls.js');
const Validator = require("validator");
const axios = require('axios');

exports.userLogin = async (req, res) => {
    try {
        const r = req.query;
        if (!r.user) return res.status(400).json({ success: false, msg: '参数不能为空！' });
        const checkUser = SURVER_ACCOUNT.filter(item => item.username == r.user);
        if (!checkUser.length) return res.status(400).json({ success: false, msg: '用户不存在！' });
        const { data } = await axios.post(apis.surveyLogin, checkUser[0]);
        if (!data.success) return res.status(400).json(data);
        const newUser = Object.assign(checkUser[0], data.result);
        const findUser = await SvUser.findOne({ phone: newUser.phone });
        if (findUser) {
            newUser.updateTime = Date.now().toString();
            const updateUser = await SvUser.findByIdAndUpdate(findUser.id, newUser, { new: true });
            return res.status(200).json(updateUser);
        } else {
            const saveUser = await new SvUser(newUser).save();
            return res.status(200).json(saveUser);
        }
    } catch (error) {
        throw error
    }
}