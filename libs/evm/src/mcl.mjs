import mclwasm from 'mcl-wasm';
import { BigNumber, utils } from 'ethers';
import { hashToField } from './hash-to-field.mjs';

const { arrayify, hexlify } = utils;

export const FIELD_ORDER = BigNumber.from('0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47');

export const init = async () => {
    await mclwasm.init(mclwasm.BN_SNARK1);
    mclwasm.setMapToMode(mclwasm.BN254);
};

export const hashToPoint = (msg, domain) => {
    if (!utils.isHexString(msg)) {
        throw new Error('message is expected to be hex string');
    }

    const _msg = arrayify(msg);
    const [e0, e1] = hashToField(domain, _msg, 2);
    const p0 = mapToPoint(e0);
    const p1 = mapToPoint(e1);
    const p = mclwasm.add(p0, p1);
    p.normalize();
    return p;
};

export const mapToPoint = (e0) => {
    let e1 = new mclwasm.Fp();
    e1.setStr(e0.mod(FIELD_ORDER).toString());
    return e1.mapToG1();
};

export const toBigEndian = (p) => p.serialize().reverse();

export const g2 = () => {
    const d = new mclwasm.G2();
    d.setStr(
        '1 0x1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed 0x198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c2 0x12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa 0x090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b'
    );
    return d;
};

export const g1ToHex = (p) => {
    p.normalize();
    const x = hexlify(toBigEndian(p.getX()));
    const y = hexlify(toBigEndian(p.getY()));
    return [x, y];
};

export const getPubkey = (secret) => {
    const pubkey = mclwasm.mul(g2(), secret);
    pubkey.normalize();
    return pubkey;
};

// generated custom key pair
export const newKeyPair = () => {
    const secret = randFrCustom();
    const pubkey = getPubkey(secret);
    return { pubkey, secret };
};

export const sign = (message, secret, domain) => {
    const messagePoint = hashToPoint(message, domain);
    const signature = mclwasm.mul(messagePoint, secret);
    signature.normalize();
    return { signature, messagePoint };
};

export const randFrCustom = () => {
    const r = '0x8ec786838334c763a4d43885';
    let fr = new mclwasm.Fr();
    fr.setHashOf(r);
    return fr;
};
