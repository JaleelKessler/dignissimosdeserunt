import { expect, test } from 'vitest'

import { base } from '../../chains/index.js'
import { createPublicClient } from '../../clients/createPublicClient.js'
import { http } from '../../clients/transports/http.js'
import { getProof } from './getProof.js'

test('default', async () => {
	const client = createPublicClient({
		chain: base,
		transport: http(),
	})

	const result = await getProof(client, {
		address: '0x4200000000000000000000000000000000000016',
		storageKeys: [
			'0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
		],
	})

	expect(Object.keys(result)).toMatchInlineSnapshot(`
    [
      "accountProof",
      "address",
      "balance",
      "codeHash",
      "nonce",
      "storageHash",
      "storageProof",
    ]
  `)
})

test('args: blockNumber', async () => {
	const client = createPublicClient({
		chain: base,
		transport: http(),
	})

	const result = await getProof(client, {
		address: '0x4200000000000000000000000000000000000016',
		storageKeys: [
			'0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
		],
		blockNumber: 3155269n,
	})

	expect(result).toMatchInlineSnapshot(`
    {
      "accountProof": [
        "0xf90211a0dccbbb8670d081b48e30530efc9163459f3a904a030b46fba481b2cf93f714caa0ccfbf4c88eabfadec6f01e2b6036845fd1dfb395b9cfc492d7bf2423f1e62585a0bf21e0b21a29dbf2edbb5a61bdf3e934d19a8acdec14bc5e2fbc981b188cea68a01c18076f795cea22af635cba9aa49f465f48f8ce326636948e3c6a3899437efca0140c6e44c05838d2aaac2859a2e4ca91d774e251443701b42aa30b1d2732fc62a02cc22982c477d8de35b93eb28de31a7c7ee3f988398db6a9d0a15613cd6ff044a0bae5a7b400ba3273e17808fbbe08fe02b4e2b6a9eecf01e25429303c5ca692dfa09fee72365c5e1edc36562ad14534c4cefa968e97a0e9548d548636ecbca447a4a07103587ac8e5c2abb3aaa06f990ab78474cf81f79ddbcba3d0c2720a5388940ba0517e9e7975ba946c7558852b18397726d1e923d593fff7af50ba8a621acdf57fa01b6ecae06ccc97c22ebbbaf5373b5699c6e57113fa4827aedf237b7ee9a671f1a0d8facbcaa4e4226ea8ba075b0cb350e124cb62b791eb232a3e970f34187a103fa08fcd293105a9ca3644b8c9517a6cf654cfddd9f7cddb030f5098d073e0d9d2dea07ea1cc9414073aa228ca3ebcb192d8f4404ec230058fd96fa2e0a564ff52c3aba06e984cf85d71370fa0f8dfd793a1351edb63b5dc9762e6f13d6b4319bcff0ad9a0e4684bfbc8e515599e2c7a6d3a21712aa1c3231c80f83b0ba0b6cc42d81d94ca80",
        "0xf90211a0e5c073375c96b3641fb3b0d962e2dbc45f64232981ca11a3ae0396b8919eeae4a0ba8b404dbedeb2484221f33656620ed5dfdfe36e809def753c764fbd58cb8838a0d52e57afe17bb0cf1f47c1941930b6738889b3dda7d635484a005da0aad5f085a02b63fe2841a2307bc09ce791d34dd9842b34f72c63677e0107ff1d09044421eaa03c5c5dbc0f65e6de6295de769946044249af07830e21917ab2479167df25f887a07b003793df6ccf8e57346e97eef98c736aa9b7299070f0a873ed90bad6915d4fa0227dd09a0c8a5cf0d3843048ccb989f7a7d0de739f916cc935fdb18350a4d06da053211520ee3d76320e9e5403a0c43d21f13b8bcee61574fe5e29c169eb43b156a0e46ac93a109ca343767a22aea8075b678161bb3e451c191b0c8467e4f1fbbd3ba0116a474ca799b2e7671618ffd9b2014884d0cc415e765f2fc6a99f4528dff0a0a024a2cf34ca4ac8dd43f22766540bdbb55e02d55b4a83d3d74aafb7e064045744a025422a1657edff18482e476639ac7c6958eaa3ca07f206cce6ea030a3e38364ea0f66cbc64c91e8f85c929911638014a7fe97ceea99fbcf81c9cb97fc006b91964a06c9c16770f2a2015942e1476f1db82e457d7b0fce7cd3c93eb138a209ef7b1f5a060cc0346532fb66040018760796f719cbfe8ddf87805f7160fb0513da37fbeffa0ba83cfb35237c9fe9b532ec2160266da28f5ecfa2923b1d8b0ac04e469dbe2a180",
        "0xf90211a0be7663df972b337246f45b1c01a7a8a8fcbf5cb09fb4d795d024587a937cf4f6a0f0576356970a9d1e7d1ae63db09e46cabe3242d6ba5fdb2ba7f5aec490f4446aa08679d78580a7d4f8c19fced1ba48b133afd40284551af14edd9286a3a82fc037a02534752e6c8afb0c5f8695b2daac0bd2e5f34dd7368afed60f3a39fd7b25bb51a08f41ca425e6ae789aeee71f331f3ba9dec3e9fe6a84c8ef3da63e5a2d9251bb4a01b67159c328f93d3db19ec53ab849083365825ee312bc9b401af7873ff91c16ba07eb467baaff8aff04224010fa34074d0419dce3cfe10f5b950fbebe964936d20a01320439cf94d0643a9ac17afcd02dbbdd239050acd3ae24d24630a47a89ae18da0602aafe319588f850f9649099be8a8fd155b1752f12ddb55328d3b3cfe42e7e7a09bf97c817af4d079a451c33512e7e76b1c73e7cf34f482155d01ab082c47793da09451e3a6cb4ccb7b17f7f480a6ff017b80f20b9d659fd3b0fc98e40b39298cf3a09a762ed39ec1d91aa52dcc9cd74f6ca9d98f04f6fccca70480243e1f2c5e7fbfa0f7ca342009740f9231f612984a00b14b643f481b71bd42380eb4c0a386eefb9ba05d72b701f47b03981800c7205d67726940c63f3d611eb1406484bafe812039dba0bf4ea85bc84c06fa7b72213723ed487d473fb07fc7ab390057e6f60947146bd4a0a60af3b5570360be0291883c10877ccb950dfc7a8b922c2461e9564af4ec66e180",
        "0xf90211a0045dac1b3edd6744e327fcfa1cd5a250179b49adb150967b026b9dcd4e282e7aa089eb89e009236cfb8899d65014a4a6793e1d3b97c23b9dce8c473c201ef99ba3a03e839fd2c273e9744e008bdb058906bb897469d42dbd96bb60f3700c47a53873a0ff11b496d368221778ce33e4c979c9a2a64578372122c03e50cc7857cdf8cb19a00753a249b72b69794020934df34940c3bdae7d98554ff2c21727053f3278e418a01d981e829eab8c1610502eacf0c6e609b8f98315e92b409b476a3e249495854ba05ee0412ab87d42ed03734e7ca8db9a5f3ed29687f998975dccdaebcbbb671bd9a042b5ff7c68cb82b9bb938b069dd493188978b197ac9aa68a25c1d2e60a19a0cea04bf7a507aa0d9d3e1d58758df949f2d5a35bba41f545c002c97195266fb02213a06f43c887bd8e634778bf676170118a377be58823f71acde465d96bd1c9078433a0dfc0a31571784f473415095eb431c0aa23f877b8a064c8bb8873d0d84c816c9aa0cc333539a85ebe9917907294e2c9092804ecfdb9638a1a2a7d140731a5b1e075a0d934145b1201ebf1d0bf2c24634db1ecdecf7e10b6767bf08d661041bc0dd2a2a07f49173fb16451be04983ca90031ccc5e8316a302047888c2a02447f6f631007a0bfdb09464f10f9709a9ede282d588185b9923a4c67248ce25aa2f846c44c21b7a0c848b846bbb797142061585e971b2acb8895768cdbf9d81aa33e7dd167af434680",
        "0xf901d1a0e21144a5049f6bec9c82907863f084666375595a86b49fd4fd431addb8a1643180a072e0615f55001672b82d8e8101517990bd63bac3a107962a72c14f7c839ab298a0133b7a5bb62c37214443f6ec79f51315455f034a4bda092df87a68f2448fc286a088e7916840f8be03239dc69915128d71183cd02e3004233f853728168e263dd880a06d2eae9a83d6649bec9df71cbf17860cdc7883edb4c49ce2cfd62762b6faa884a0f7794e90a8eb8740cb7fb0f5d187ef02ae528e7daf5c8c003205450201d28bbda0fbb20af10d162cf497400a1fe31e5cef525a8616dfdf55942a7507186157c0e3a0235acffeff72079b16f29980260890e4c0132e67b04e56075e877e9a6711885da041040b44341b9f05c1e3cc641dbc0cee00e23b238b707c666af37cf58f6ca764a0fe911787b62865dbc0aaa6df39303c93ea52b22e6abb6396c974313c04c132b8a0c3a0f0ed4d74998bc20c8195049fbc6b481656b17ca7fc19a59f76db0a73c311a0e2651e12eb9ef5c8d81b07ac28b44cf15e3e4ed3da2100b891396d9602212037a0691d68d3d5ba55dc3d6b17f5b41dabf1878de6e67d49993e41944a6747eff2c0a02308b43a944cda77575bf0b479430e7679db0fd265eddccca81a5c26ecb77cfb80",
        "0xf871a025b309d3d19deedd755b1a79446caa5038552ee67c087ce3073280e532fcad7e80808080808080a05b08a1b27ff7bc8eb7e826adcf12d56b0c5fb99d69c9285036d1dab1d320e4c18080808080a00b1efefd126908429221e5faa6b9521c6053f362b8651073c16a4c1e5c3e6dfb8080",
        "0xf871a0acd2910d71847b68f0c4aab889d1fae124a51c06f5c008509af41a90353e250c80808080a097fb7d07d62028e43721f195dcf995d511f178c9044221b141388df336bb91ca8080808080a0fac8c95016dbaa54aa7b086af1554796f1a68d9b7469799e0b7539d7b9e72b3e8080808080",
        "0xf8709d30147f4cc0e0156d993334777d699c312c2fe454f8b3fa338ed309f4a0b850f84e038a03879854ce7afb402eb9a0361cb165ecac85c1cbd217c395312261f8a4a40607de762f35d117fd5e68fe8ea01f958654ab06a152993e7a0ae7b6dbb0d4b19265cc9337b8789fe1353bd9dc35",
      ],
      "address": "0x4200000000000000000000000000000000000016",
      "balance": 16668386523779130470073n,
      "codeHash": "0x1f958654ab06a152993e7a0ae7b6dbb0d4b19265cc9337b8789fe1353bd9dc35",
      "nonce": 3,
      "storageHash": "0x361cb165ecac85c1cbd217c395312261f8a4a40607de762f35d117fd5e68fe8e",
      "storageProof": [
        {
          "key": "0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99",
          "proof": [
            "0xf90211a046fd8cc7acfd7e1648d5f5d672b00a57975866ab77fc1d1edd0fd470b1e9c974a01089e1f22f655ca9dd573e94092409b6058c886ffd306958e3946e8b4a4ca5dea080c546bc73d85d29d0d3d6bcc6c13903f4d86e14afbefb3b76829e30bfad750fa003dde1bf27d9042381a40a6fe4ee85950658fe79f166becce834480d3da1a420a00ff465b6e07b5173fbe95eb1cbb774e037a82e68567f3433d04aef0c83f4a841a07ddfb95a01affa0cddfb7367ddc695c178e2338c52d261ad1adf1666ffbecd0ba0848750dadc167a3169b3feaf0f5cb436cced4a1c582ca715f4382f3530431bc4a0facb8f76564071139d5b91c547edd2b81d336203ea48aa2f023f151f31d3b7eba0179955930c03dada33bfdab40af3102fcde29f320f965bd0e4855caa69e3f946a0fa5771f1a70c9264c1a74546ec5bee6bddef5d7436684e1e12374601902f62e2a09165f315cf12e23fa8bad31ae89adfff1f11911cb7234e39da68af502d7826f7a081f23503029ef3b76a00e16c6e84c787ef55a36718531828441a2bfa370efd95a030feda45aea31e059830686c093d6dd3fd8af3c6060c917b96641dd5f2684b1ca099131a0429fc3b9fc21f241ee4edb035ca5e7edc020edf8f20237e90fa19bf7aa036c92dcdcdab8a0633fe4d485175b822e7d4ef480735821f051ce6ac363f480ba0d58de2b771b8dbc48c116f88d110a07ddf2f0ea4bab06016af5e820044d7710680",
            "0xf90211a0d140c5c2b3883d47ab4a8a854db1b485bef6d66668bbf28db9f44f1a33a47efda08eb4a086450124184683edf6477754cce893ec77a0d850fdb4a9b42d312878b1a05d85206335640539cb15f5a3b46119425012711ac4a0a296d124827d02e03df6a0bc783601ddd055a8ddfce04b4bfb53d2b8abba6906f2aa506147c15bea6e2a90a0c3737ed1dd6b1227ef9082e5c5858d37949a138f6b80f99b858422a87f2fe63ca056bd56c1c09b31b30004af2c6c72898b04199f705cdd945ad3bc595093d4c575a040082b3a29948b37698f125ce85b17a891a2dee51ddfc922f812d35576e8d189a07979fe1847729a1897dd777efc7e4997397968a787a122a4d41529cfe78b4f1aa0c8f4c637bed657d99b94ebbc55716ea1ed7349012ee2368f094f1dfa6c6f9a22a016dec76b539ae8ec56fd26a370d57994852bccf7fe5d5a6a67ec31a62b9ff04fa062b8cfbed7df52a860b2246f3bba9e2eb3ff197ceed3b3cefd8de438fd45fb41a0f7d4494f5cdee910ba5a5f3d91d49eb8471e4be004af048aab40720e02f870e8a092c374c433448b5d7e7b7b0950646fc258ec02057d2c05f0cdeefaa233cfc2b2a0fc6ca11cf5ab126c3ef596b50da411a3f10ca65fff2c16f165593e91c105bcbca0be926b1fe454a7a063df34b74987258307b2f9fe88a1efbbffa64e8631e18f62a09a128dac06f05dd226cc59b573ef500f42a3af50e9518b6b9c8de091fbb81dd380",
            "0xf90211a06b4334774094b85e6d6b212ef244ea8d37e3840a8900cf7fcaf26f0ba1b57f80a08c7ec04dc06a7472cab313f173f0c91d9e2a283dbcb3ab3b8679b0b8e8663595a0e493d56c712d2e5466faad468cb14dd9e7a09759a01b045a00a0bee004b4a135a0fd043ac499e3541c8a011fc56b1fe0dbc831d246374c3d564760b966520b250ca077d1f87eb1a060e12e7d6ccf12e4bd7b4975651aede3b90fb5c2c91ee0f14507a0baaafc9bea47c22ee62a354053caa05969ba44b4b97956ac04fef8965a6a4f08a0b693b7af292de08befe1ea744f435e945ba85baf8a63d0343a4d010ac05c4803a04ab831ebdb5c61f93b62385eaab42693aa7bcf1a3d64c2be1513856cc09066aba00ca3ac70b29ab6dc9824d4f53252a61b3e6cf1be81066212c03dbc9f0f876a2aa0a616ee59b09acbed36575744b095a6da649dde34146325a53d0c27e0e20ba6d3a08b5e70895c23dd7d60d07de7a6303eb97777da22463a6e0339af64c4e81d5af4a092ec52fedb421ac75f2eca910968d2266ba5a0a436d3ed399d4336b855d6a813a07962445cedc68def051db9f4a8fbf4b00d6fac8fb4a323e7f80b1483faaac1e8a092e6c04604c4958d4585ac99302002049bcdc9f0b2039be6ccfa26a932507888a03949233e5a07a7569a855d3b4ce7c3411d7cae464d76b85521653c3371da2ff0a084dc2e98c595137b2ca459c5e79afee3009b5591589c8a08991fc8d55705594d80",
            "0xf891808080a0ca67d7b0ef83f204cf4fc9224521b03a53ee862f1f27c09d2ce6ffe7db493918a0dba447f8f67f2f11a37e15da88e589cf53711230ab18d7d9fa73a2c5b490cde08080a0e2e1621f67a50c4257dade2586847698274771dcae98f127cba14826c8786f8e8080808080a010155a6ce4d4e938b8b77e65013fe753a7fbee3943538c2b7aef608a44a13288808080",
            "0xf851808080a045b921b743a4a6a427e260907095ee3aeeae883f4b2b8f391dd5a52c3e42a35b80808080808080808080a04b56025e29659751f0c3af2a13c9748c86ff7e39436524afe5b550fa5dbc61e98080",
            "0xe09e3ae9e50a84347d77c11606b3dc7b2a80bc43ebb66382c342916c5281ddab01",
          ],
          "value": 1n,
        },
      ],
    }
  `)
})