const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/auth';

async function testAdminRestriction() {
    console.log('🧪 Testing Admin Restriction Logic...\n');

    try {
        // Test 1: Check if admin exists initially
        console.log('1. Checking initial admin status...');
        const adminStatus = await axios.get(`${BASE_URL}/admin-status`);
        console.log('✅ Admin status:', adminStatus.data);

        // Test 2: Try to register first admin (should succeed)
        console.log('\n2. Attempting to register first admin...');
        const firstAdmin = await axios.post(`${BASE_URL}/register`, {
            username: 'admin1',
            email: 'admin1@test.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('✅ First admin registered successfully');

        // Test 3: Check admin status after first admin
        console.log('\n3. Checking admin status after first admin...');
        const adminStatusAfter = await axios.get(`${BASE_URL}/admin-status`);
        console.log('✅ Admin status:', adminStatusAfter.data);

        // Test 4: Try to register second admin (should fail)
        console.log('\n4. Attempting to register second admin...');
        try {
            await axios.post(`${BASE_URL}/register`, {
                username: 'admin2',
                email: 'admin2@test.com',
                password: 'admin123',
                role: 'admin'
            });
            console.log('❌ Second admin registration should have failed!');
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.log('✅ Second admin registration correctly blocked');
                console.log('📝 Error message:', error.response.data.error);
            } else {
                console.log('❌ Unexpected error:', error.message);
            }
        }

        // Test 5: Register regular user (should succeed)
        console.log('\n5. Attempting to register regular user...');
        const regularUser = await axios.post(`${BASE_URL}/register`, {
            username: 'user1',
            email: 'user1@test.com',
            password: 'user123',
            role: 'user'
        });
        console.log('✅ Regular user registered successfully');

        console.log('\n🎉 All admin restriction tests passed!');

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
}

// Run the test
testAdminRestriction(); 